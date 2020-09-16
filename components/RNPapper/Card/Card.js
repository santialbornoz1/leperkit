import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import assets from '../../../assets/assets.js';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => {
    const onPressCard = (e) => {
        props.onPress();
    }
    return (
        <Card style={{ backgroundColor: "#fff", margin: 14 }} onPress={onPressCard}>
            <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} />
            <Card.Cover source={assets[props.imagePath]} />
            <Card.Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.subtitle}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={onPressCard}>ELEGIR</Button>
            </Card.Actions>
        </Card>
    );
}

export default MyComponent;