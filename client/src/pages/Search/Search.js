import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { FormBtn, Input } from "../../components/Form";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal";

class Search extends Component {
    state = {
        articles: [],
        topic: "",
        begin: "",
        end: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getArticles = () => {
        API.getArticles({
            topic: this.state.topic,
            begin: this.state.begin,
            end: this.state.end
        })
            .then(res =>
                this.setState({
                    articles: res.data,
                })
            ).catch(err => console.log(err));

    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles();
    };

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => this.getArticles());
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="m12">
                        <form>
                            <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic (required)" />
                            <Input value={this.state.begin} onChange={this.handleInputChange} name="begin" placeholder="Begin Date (YYYYMMDD)" />
                            <Input value={this.state.end} onChange={this.handleInputChange} name="end" placeholder="End Date (YYYYMMDD)" />
                            < FormBtn disabled={!(this.state.topic && this.state.begin && this.state.end)}
                                onClick={this.handleFormSubmit}>
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="m12">
                        {this.state.articles.map(article => (
                            <Card
                                key={article._id}
                                _id={article._id}
                                title={article.headline.main}
                                url={article.web_url}
                                date={article.pub_date}
                            />
                        ))}
                        <Modal
                            handleClick={this.handleArticleSave}
                        />
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Search;