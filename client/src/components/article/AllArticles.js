import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from '../../redux/actions/article';

const AllArticles = () => {
    const dispatch = useDispatch();
    const {articles} = useSelector(state => state.article);

    useEffect(() => {
        dispatch(getArticles());
    }, []);

    return <div>
        <div className="container">
            <div className="row">

                <div className="col-lg-8 col-md-10 mx-auto">
                    <h1>All Articles</h1>
                    <Link to={"/articles/create"}>
                        <button className="btn btn-primary">Create</button>
                    </Link>

                    {articles.map(article =>
                        <React.Fragment>
                            <div className="post-preview">
                                <Link to={"/articles/view/" + article._id}>
                                    <h2 className="post-title">
                                        {article.title}
                                    </h2>
                                    <h3 className="post-subtitle">
                                        Problems look mighty small from 150 miles up
                                    </h3>
                                </Link>
                                <p className="post-meta">Posted by
                                    <a href="#">Author</a>
                                    on September 24, 2019</p>
                            </div>
                            <hr/>
                        </React.Fragment>
                    )}
                </div>

            </div>
        </div>
    </div>
}
export default AllArticles;
