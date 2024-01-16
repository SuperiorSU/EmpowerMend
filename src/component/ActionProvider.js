import React from 'react';
import DogPicture from './widgt';
import LinkList from './Linklist';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    const dogHandle =()=>{
        const botMessage = createChatBotMessage("I'm a dog" , 
        {
            widget:'dogPicture'
        })
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
            }))
    }
    
   const handleJavascriptList = () => {
      const message = createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      )
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message]
        }))

  
     
    };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,
            dogHandle,
            handleJavascriptList,
        },
        });
      })}
    </div>
  );
};

export default ActionProvider;