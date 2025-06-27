import { useContext, useState, useEffect, useRef } from "react";

import { Box, styled } from "@mui/material";

import {AccountContext} from '../../../context/AccountProvider'

import { newMessage, getMessages } from "../../../service/api";

// components 
import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({person, conversation})=>{

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    const {account, socket, newMessageFlag} = useContext(AccountContext);

    useEffect(()=>{
        const handleGetMessage = (data) => {
            console.log('📨 Received message:', data);
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            });
        };

        const socketRef = socket.current;
        if (socketRef) {
            socketRef.on('getMessage', handleGetMessage);
        }

        return () => {
            if (socketRef) {
                socketRef.off('getMessage', handleGetMessage);
            }
        };
    }, [socket]);

    useEffect(()=>{
        const getMessageDetails = async()=>{
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])

    useEffect(()=>{
        setTimeout(()=> scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' }), 777);
    }, [messages]);

    useEffect(()=>{
        if (incomingMessage && conversation?.members?.includes(incomingMessage.senderId)) {
            // Only add message if it's not from the current user (to avoid duplicates)
            if (incomingMessage.senderId !== account.sub) {
                console.log('📥 Adding incoming message from:', incomingMessage.senderId);
                setMessages(prev => [...prev, incomingMessage]);
            }
        }
    }, [incomingMessage, conversation, account.sub]);

    const sendText = async (e) => {
       const code =  e.keyCode || e.which;
       if(code === 13){
        let message={};
        if(!file){
            message = {
                senderId : account.sub,
                receiverId : person.sub,
                conversationId : conversation._id,
                type: 'text',
                text: value
            }
        }else{
            message = {
                senderId : account.sub,
                receiverId : person.sub,
                conversationId : conversation._id,
                type: 'file',
                text: image
            }
        }

        // Add message immediately to UI for sender
        const messageWithTimestamp = {
            ...message,
            createdAt: Date.now()
        };
        setMessages(prev => [...prev, messageWithTimestamp]);

        // Send via socket
        console.log('📤 Sending message:', message);
        socket.current.emit('sendMessage', message);
        
        // Save to database
        await newMessage(message);

        setValue('');
        setFile('');
        setImage('');
        // Don't use newMessageFlag since we're updating messages directly

       }
    }
    return(
        <Wrapper>
            <Component>
                {
                    messages && messages.map((message, index) => (
                        <Container key={message._id || message.createdAt || index} ref={scrollRef}>
                            <Message message={message}/>
                        </Container>
                    ))
                }
            </Component>
            <Footer
                sendText = {sendText}
                setValue = {setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;