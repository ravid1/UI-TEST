import alex from './icons/users/alex.png';
import alexandra from './icons/users/alexandra.png';
import james from './icons/users/james.png';
import nina from './icons/users/nina.png';

import sales from './icons/sales.png';
import report from './icons/report.png'


const users= {1:{id: 1, name: "Nina Jones", picture: nina},
              2:{id: 2, name: "James Smith", picture: james},
              3:{id: 3, name: "Alex Clooneu", picture: alex},
              4: {id: 4, name: "Alexandra Spears", picture: alexandra}};

const chartData = [
    {title: 'Your Sales', icon: sales},
    {title: 'Report', icon: report}
];
              

const contentData = [
    {
      title: "Tasks",
      notifications: [{num:5, color:'#5384ff'}, {num:2, color:'#f83c7b'}],
      data: [{title: "New wbsite for Symu.co", time: '5 days delays'},
             {title: "Free business PSD Template", time: '2 days delays'},
             {title: "New logo for JCD.pl", time: '5 days left'},
             {title: "Free icons Set vol.3", time: '10 days left'}]
    },
    {
      title: "Messages",
      notifications: [{num:2, color:'#5384ff'}],
      data: [{content: "Hey You! It's me again:-) I attached new bla bla", time: '5 minutes ago', senderID: 1,seen:false},
      {content: "Hey! I attached some new PSD files for bla bla", time: 'About 20 hours ago', senderID: 1,seen:false},
      {content: "Good morning, you are fired!", time: '2 days ago', senderID: 2,seen:true},
      {content: "Hello! Could you bring me coffee please?", time: 'About 2 weeks ago', senderID: 1,seen:true}]
    },
    {
      title: "Activity",
      notifications: [{num:10, color:'#5384ff'}],
      data: [{title: "added a new project", project: "Free UI Kit", time: 'just now', userID:1},
             {title: "commented project", project: "Free PSD Template", time: '40 minuts ago', userID:2},
             {title: "completed task ", project:"Symu Website", time: '1 hour ago', userID:3},
             {title: "added a new project ", project: "Free PSD", time: '3 hours ago', userID:4}]
    }];

export  {contentData,chartData,users};