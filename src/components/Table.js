import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TableData from './TableData';
import _ from "lodash"

const pageSize = 3;

const Table = () => {

    const [posts, setPosts] = useState();
    const [paginatedPosts, setpaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                setPosts(res.data)
                setpaginatedPosts(_(res.data).slice(0).take(pageSize).value())
            })

    }, []);

    const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)
    const pagination = (pageNum) => {
        setCurrentPage(pageNum);
        const startIndex = (pageNum - 1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPost)
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Company</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                paginatedPosts?.map((post) => <TableData key={post.id} post={post} ></TableData>)

                            }
                        </tbody>
                    </table>

                    <div className="btn-group py-4">

                        {
                            pages.map((page) => (
                                <button onClick={() => pagination(page)} className={page === currentPage ? " btn bg-rose-500" : "btn hover:bg-rose-500"}>{page}</button>
                            ))
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Table;


