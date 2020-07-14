import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { Container, Header, Footer,Body,Content, Left, Right, Button, Icon, Thumbnail, ListItem, H3 } from 'native-base';

function Sidebar({ ...props }) {
    return (
        <Container>
            <Header transparent style={{ backgroundColor: '#ffffff' , shadowColor: 'transparent'}}>
                {/* <Left>
                    <Button transparent>
                        <Icon name="menu" style={{ color: 'black' }} />
                    </Button>
                </Left> */}
                <Right>
                    <Button transparent>
                        <Icon name="menu" style={{ color: '#0077CC' }} />
                    </Button>
                </Right>
            </Header>
            <Content>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                        }}/>
                    </Left>
                    <Body>
                        <H3>Domus</H3>
                    </Body>
                </ListItem>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </Content>
            <Footer transparent style={{ backgroundColor: '#ffffff' , shadowColor: 'transparent'}}/>
        </Container>

    )
}

export default Sidebar;



