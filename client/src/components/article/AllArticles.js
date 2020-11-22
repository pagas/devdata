import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from '../../redux/actions/article';
import Moment from 'react-moment';

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
                                <p className="post-meta">
                                    <span>Posted by </span>
                                    <a href="#">Author</a>
                                    <span> on </span>
                                    <Moment format="D MMM YYYY" fromNow >{article.publishedAt}</Moment>
                                </p>
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
