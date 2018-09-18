import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { FormBtn, Input, TextArea } from "../../components/Form";

class Articles extends Component {
    state = {
        articles: [],
        topic: "",
        begin: "",
        end: "",
        results: [],
        error: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.searchArticles(this.state.search).then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
        })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="m12">
                        <form>
                            <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic (required)" />
                            <Input value={this.state.begin} onChange={this.handleInputChange} name="begin" placeholder="Begin Date (YYYYMMDD)" />
                            <Input value={this.state.end} onChange={this.handleInputChange} name="end" placeholder="End Date (YYYYMMDD)" />
                            <Link to={/results}>
                                < FormBtn disabled={!(this.state.topic && this.state.begin && this.state.end)}
                                onClick={this.handleFormSubmit}>
                                Search
                            </FormBtn>
                            </Link>
                        </form>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Articles;