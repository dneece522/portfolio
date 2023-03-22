const projects = [
  {
    title: 'Christmas Pyramid',
    description: "Christmas Pyramid is a holiday-themed version of the addition-based solitaire card game Pyramid! Using a shuffled array of 52 playing cards, 28 cards are drawn randomly to be aligned in a 7-row pyramid. The remaining 24 cards will be placed face-up in a stockpile. The goal of the game is to clear the pyramid by selecting 2 cards that add up to a total of 13. You can only play a card that isn't covered up by a card underneath it, so you have to clear the pyramid from the bottom up. If no moves are available on the pyramid, you can flip the card from the stockpile to the waste pile until you get a card you can play, and you can play from the top of either deck. The game is won when the entire pyramid is cleared, but if you go through the whole stockpile 3 times without clearing the pyramid, then the game is over. Each card has another card it can match with, except the King, which can be cleared on the first click because it has a value of 13. The suit of the card is not important for this game, and the card pairs and their corresponding numeric values are as shown: Ace (1) & Queen (12), Two (2) and Jack (11), Three (3) and Ten (10), Four (4) and Nine (9), Five (5) and Eight (8), and Six (6) and Seven (7).",
    image: '/gameplay-screenshot.png',
    repositoryLink: 'https://github.com/dneece522/pyramid',
    deploymentLink: 'https://pyramid-drewneece.netlify.app/'
  },
  {
    title: '2K Create-A-Team',
    description: "This application simulates the popular MyLeague game mode in the NBA 2K video game series, where users can create and customize their team and roster. In this version, users can create a team that includes the city, mascot, conference, both primary and secondary colors, and roster. Users are also able to create individual players that can be added to the user's team roster. The players can be customized by adding their names, positions, colleges, and offensive and defensive skill ratings. The user has the freedom to create a real NBA team, an imaginary team, an NBA player, an imaginary player, or themselves! The user has the ultimate creative freedom, as long as they are signed in through Google. Users who are not signed in will only be able to view existing players and teams.",
    image: '/gameplay.png',
    repositoryLink: 'https://github.com/dneece522/2k-create-a-team',
    deploymentLink: 'https://drewneece-create-a-team.fly.dev/'
  },
  {
    title: 'Exchange-O-Gram',
    description: "Exchange-O-Gram is a social media photo-sharing application. After signing up, a user can upload photos and display them on the feed page and their profile page. The user can also view other users' photos on the feed page and like and comment on each post. If a user wants to message another user directly, they can send and respond to messages from their profile page. Exchange-O-Gram makes it easy to keep up with your friends and family's lives through photo sharing!",
    image: '/feed.png',
    repositoryLink: 'https://github.com/dneece522/exchangeagram-front-end',
    deploymentLink: 'https://exchangeagram.netlify.app/'
  },
  {
    title: 'setSchedule',
    description: "All college students have been there; you sign up for classes months before the semester starts, and by the time classes roll around, it's hard to remember what days you have math or what time history starts. You may have a low-resolution screenshot on your phone that you took from the terrible UI on your school's website, and you may even set that as your screensaver to try and remember everything! The worst part is when your friends text you to hang out or grab some drinks at happy hour, but you just sat down for your STATS 101 class like you told your friends for the millionth time. This is all a thing of the past with setSchedule! This app allows users to create a profile to add their schedule for the semester, so they always remember when their classes are. Users can add each class's subject, code, days, time, and credit hours. Every user's schedule will be displayed on their profile, so you'll always be able to see when your friends are in class—made a mistake when submitting a class? No worries! Every user can edit a class after it's added. Once the semester is over, there is an option to delete your account so you can start fresh for the next semester or if you're graduating!",
    image: '/landing-page.png',
    repositoryLink: 'https://github.com/dneece522/set-schedule-front-end',
    deploymentLink: 'https://set-schedule.netlify.app/'
  }
]

export {
  projects
}