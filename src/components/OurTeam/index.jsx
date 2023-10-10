import React from 'react';
import './ourTeam.scss';
import UserRow from './component/UserRow';
import team0 from '../../assets/images/teams/team0.png';
import team1 from '../../assets/images/teams/team1.png';
import team2 from '../../assets/images/teams/team2.png';
import team3 from '../../assets/images/teams/team3.png';
import team4 from '../../assets/images/teams/team4.png';
import team5 from '../../assets/images/teams/team5.png';
import team6 from '../../assets/images/teams/team6.png';
import team7 from '../../assets/images/teams/team7.png';
import team8 from '../../assets/images/teams/team8.png';
import team9 from '../../assets/images/teams/team9.png';
import team10 from '../../assets/images/teams/team10.png';
import team11 from '../../assets/images/teams/team11.png';
import team12 from '../../assets/images/teams/team12.png';
import team13 from '../../assets/images/teams/team13.png';
import team14 from '../../assets/images/teams/team14.png';
import team15 from '../../assets/images/teams/team15.png';
import team16 from '../../assets/images/teams/team16.png';
import team17 from '../../assets/images/teams/team17.png';
import UserCard from './component/UserCard';

function OurTeam() {
  const teams = [
    {
      name: 'Sachin Tendulkar',
      role: 'Batsman',
      timePeriod: '1989 to 2013',
      picture: team0,
      about:
        'Sachin Tendulkar, in full Sachin Ramesh Tendulkar. Indian professional cricket player, considered by many to be one of the greatest batsmen of all time. In 2012 he became the first cricketer to score 100 centuries.',
    },
    {
      name: 'Virender Sehwag',
      role: 'Batsman',
      timePeriod: '1999 to 2013',
      picture: team1,
      about:
        "The most remarkable aspect of Sehwag's career of course has been his ability to build massive scores at breathtaking speed. He holds the Indian record for highest number of Test double-hundreds",
    },
    {
      name: 'Virat Kohli',
      role: 'Batsman',
      timePeriod: '2008 to present',
      picture: team2,
      about:
        'Considered to be one of the best cricketers in the world, he is widely regarded as one of the greatest batsmen in the history of the sport. Nicknamed The King, due to his dominant style of play and popularity, Kohli holds numerous records in his career across all formats.',
    },
    {
      name: 'Kapil Dev',
      role: 'Allrounder',
      timePeriod: '1978 to 1994',
      picture: team3,
      about:
        "Kapil Dev, in full Kapil Dev Ramlal Nikhanj. Indian cricketer and the greatest pace bowler in his country's history. He is the only cricketer to have scored over 5,000 runs and taken more than 400 wickets in Test (international match) cricket.",
    },
    {
      name: 'Sourav Ganguly',
      role: 'Allrounder',
      timePeriod: '1992 to 2008',
      picture: team4,
      about:
        'He is also one of the five players in the world to achieve amazing treble of 10,000 runs, 100 wickets and 100 catches in ODI cricket history',
    },
    {
      name: 'MS Dhoni',
      role: 'Keeper Batsman',
      timePeriod: '2007 to 2018',
      picture: team5,
      about:
        'Mahendra Singh Dhoni is one of the most well-known cricketers in the world. Successful cricketers in Indian history. He holds several records, including most runs scored in International Cricket Council (ICC) tournaments, most wickets taken by captains in Tests, and the fastest half-century in ODIs',
    },
    {
      name: 'Ravi Shastri',
      role: 'Allrounder',
      timePeriod: '1981 to 1992',
      picture: team6,
      about:
        'Ravishankar Jayadritha Shastri (born 27 May 1962) is the former head coach of the India national cricket team, a cricket commentator. As a player, he played for the India national cricket team between 1981 and 1992 in both Test matches and One Day Internationals.',
    },
    {
      name: 'Rahul Dravid',
      role: 'Keeper Batsman',
      timePeriod: '1996 to 2012',
      picture: team7,
      about:
        'Known for his successful batting technique, Dravid scored 24,177 runs in international cricket and is widely regarded as one of the greatest batsmen in the history of cricket. He is colloquially known as Mr. Dependable and often referred to as The Wall.',
    },
    {
      name: 'VVS Laxman',
      role: 'Batsman',
      timePeriod: '1996 to 2012',
      picture: team8,
      about:
        'Laxman is a former Indian cricketer and currently a cricket commentator. In the 1999-2000 season of Ranji Trophy, he broke the record for most runs in a Ranji season when he made 1415 runs, at an average of 108, in just 9 matches notching up eight hundreds.',
    },
    {
      name: 'Anil Kumble',
      role: 'Spin Bowler',
      timePeriod: '1990 to 2008',
      picture: team9,
      about:
        "In a brilliant though often downplayed career, Kumble claimed virtually every Indian record. In 1999 in Delhi he swallowed all ten wickets in an innings against Pakistan. In December 2001, on home turf in Bangalore, he became India's first spinner to take 300 Test wickets.",
    },
    {
      name: 'Zaheer Khan',
      role: 'Fast Bowler',
      timePeriod: '2000 to 2014',
      picture: team10,
      about:
        'In international cricket, Zaheer Khan was the first bowler to bowl knuckle ball. Zaheer Khan introduced the knuckle ball way back in 2011 world cup. He used that ball for great effect.',
    },
    {
      name: 'Harbhajan Singh',
      role: 'Spin Bowler',
      timePeriod: '1998 to 2016',
      picture: team11,
      about:
        'He was a right-arm off spin bowler. In Indian domestic cricket he played for Punjab cricket team, in IPL for Mumbai Indians, Chennai Super Kings and Kolkata Knight Riders franchise. He is considered to be one of the best spinners of his era.',
    },

    {
      name: 'Rohit Sharma',
      role: 'Batsman',
      timePeriod: '2007 to present',
      picture: team12,
      about:
        'Considered one of the best batsmen of his generation and one of greatest opening batters of all time, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills.',
    },
    {
      name: 'KL Rahul',
      role: 'Batsman',
      timePeriod: '2014 to present',
      picture: team13,
      about:
        'We always know what Rahul brings to the team, the quality that he has especially in the middle order. He is someone who can play both spinners and pacers well.',
    },
    {
      name: 'Shikhar Dhawan',
      role: 'Batsman',
      timePeriod: '2010 to present',
      picture: team14,
      about:
        "At the 2013 Champions Trophy and 2017 Champions Trophy, Dhawan was the leading run-scorer and was awarded the 'Golden Bat' in both the tournaments. He was the leading run scorer for India at the 2015 Cricket World Cup. He also became the first player in the history of IPL to score two back-to-back centuries",
    },
    {
      name: 'Yuvaraj Singh',
      role: 'AllRounder',
      timePeriod: '2000 to 2017',
      picture: team15,
      about:
        'During the 2011 World Cup, he became the first player to take a 5-wicket haul and score a 50 in the same World Cup match. During the 2011 World Cup, Yuvraj Singh played eight innings in nine matches and scored 362 runs with a remarkable average of 90.50.',
    },
    {
      name: 'Ravichandran Ashwin',
      role: 'AllRounder',
      timePeriod: '2010 to present',
      picture: team16,
      about:
        'He is the fastest bowler to reach 350 Test wickets and has 30 five-wicket hauls in Tests. Ashwin is known for his famous carrom ball, which he picked up from the streets of Chennai.',
    },
    {
      name: 'Ravindra Jadeja',
      role: 'AllRounder',
      timePeriod: '2009 to present',
      picture: team17,
      about:
        'Dissed when he first appeared, Ravindra Jadeja won the doubters and haters over with his deeds, and now sits among the elite of Indian spin bowling. In October 2019 he became the quickest left-arm bowler to reach 200 Test wickets.',
    },
  ];
  return (
    <div className='ourTeamContainer '>
      <p>Scroll Effect</p>
      <h3>Scroll down to see the effect.</h3>
      <div className='teamRowWrapper'>
        {/* pass three data to get scroll effect in web version */}
        <UserRow team={[teams[0], teams[1], teams[2]]} />
        <UserRow team={[teams[3], teams[4], teams[5]]} />
        <UserRow team={[teams[6], teams[7], teams[8]]} />
        <UserRow team={[teams[9], teams[10], teams[11]]} />
        <UserRow team={[teams[12], teams[13], teams[14]]} />
        <UserRow team={[teams[15], teams[16], teams[17]]} />
      </div>
      {/*tab and mobile version */}
      <div className='teamSingleCardContainer'>
        {teams.map((item, index) => (
          <UserCard
            key={index}
            team={item}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
