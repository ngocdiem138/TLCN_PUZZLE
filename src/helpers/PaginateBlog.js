import React from 'react';
import { style } from 'styled-system';

const Paginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage, selectedPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pt-2">
            <nav className="mb-50">
                <ul className="pagination">
                    <li onClick={previousPage} className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".3s">
                        <a
                            className="page-link rounded-0 border-0 px-3active"
                            aria-label="Previous"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </a>
                    </li>
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            onClick={() => paginate(number)}
                            className="page-item wow animate__animated animate__fadeIn"
                            data-wow-delay=".3s"
                        >
                            <a
                                className="page-link border-0 font-size-4 font-weight-semibold px-3"
                                style={selectedPage == number ? { color: "green", fontWeight: "800" } : { color: "gray" }}
                            >
                                {number}
                            </a>

                        </li>
                    ))}
                    <li onClick={nextPage} className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".3s">
                        <a
                            className="page-link rounded-0 border-0 px-3"
                            aria-label="Next"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Paginate;