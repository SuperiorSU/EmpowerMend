import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './widgt'
import LearningOptions from './query';
import LinkList from './Linklist';

const botName = 'Empowermend'

const configg = {
    initialMessages: [createChatBotMessage(`Greetings , I'm ${botName} here to help you query related to` ,{
        widget:"learningOptions",
    })],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: "#716dff",
        },
        userInputField: {
            backgroundColor: "#716dff",
        },
        chatButton: {
            backgroundColor: "#070127",
        },
    },
    widgets : [
        {
            widgetName: 'dogPicture',
            widgetFunc:(props)=><DogPicture {...props} />,  
        },
        

    ],
  widgets : [
    {
        widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
              {
                text: "Introduction to JS",
                url:
                  "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                id: 1,
              },
              {
                text: "Mozilla JS Guide",
                url:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                id: 2,
              },
              {
                text: "Frontend Masters",
                url: "https://frontendmasters.com",
                id: 3,
              },
            ],
          },
      },

  ]

};

export default configg;