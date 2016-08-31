import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon, Content, Text } from 'native-base';

export default class Hanon extends Component {
    render() {
        return (
            <Container>
                <Header height={80}>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    <Title>Header</Title>
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
                <Content>
                    <Text>Your main content goes here</Text>
                </Content>
            </Container>
        );
    }
}