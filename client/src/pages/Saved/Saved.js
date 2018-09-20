import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";

class Saved extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.getSavedArticles();
    }
    getSavedArticles = () => {
        API.getArticle()
            .then(res =>
                this.setState({
                    articles: res.data
                })
            )
            .catch(err => console.log(err));
    };
    handleArticleDelete = id => {
        API.deletArticle(id).then(res => this.getSavedArticles());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="m12">
                        {this.state.articles.map(article => (
                            <Card
                                key={article._id}
                                _id={article._id}
                                title={article.headline.main}
                                url={article.web_url}
                                date={article.pub_date}
                            >
                                <DeleteBtn
                                    handleClick={this.handleArticleDelete}
                                />
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Saved;