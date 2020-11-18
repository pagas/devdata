import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from 'react-validation/build/button'
import Textarea from 'react-validation/build/textarea'

import {creteArticle} from "../../redux/actions/article";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

const AddArticle = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [successful, setSuccessful] = useState(false);

    const {message} = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    }

    const onChangeBody = (e) => {
        const body = e.target.value;
        setBody(body);
    }

    const handleAddArticle = (e) => {
        e.preventDefault();
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(creteArticle(title, body))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                })
        } else {
            setSuccessful(false);
        }
    }

    return (
        <div className="col-sm-12">
            <div className="card card-container">
                <Form onSubmit={handleAddArticle} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={onChangeTitle}
                                    validation={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <Textarea
                                    className="form-control"
                                    name="body"
                                    value={body}
                                    onChange={onChangeBody}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Create</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />

                </Form>
            </div>
        </div>
    );
}

export default AddArticle;
