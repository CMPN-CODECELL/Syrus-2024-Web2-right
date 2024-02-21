import React from "react";
import { Leaderboard } from "flywheel-leaderboard";

const LeaderboardPage = () => {
  const dummyData = [
    {
      name: "John Doe",
      twitter_handle: "@johndoe",
      github_username: "johndoe123",
      users: 100,
      twitter_followers: 5000,
      github_stars: 2000,
    },
    {
      name: "Jane Smith",
      twitter_handle: "@janesmith",
      github_username: "janesmith456",
      users: 80,
      twitter_followers: 3000,
      github_stars: 1500,
    },
    {
      name: "Amit Nayak",
      twitter_handle: "@amitnayak",
      github_username: "amitnayak456",
      users: 80,
      twitter_followers: 3000,
      github_stars: 1500,
    },
    {
      name: "Nilesh Balotiya",
      twitter_handle: "@nileshbalotiya",
      github_username: "nileshbhai",
      users: 80,
      twitter_followers: 3000,
      github_stars: 1500,
    },
    {
      name: "Shreaysh Dhasade",
      twitter_handle: "@shreydhasade",
      github_username: "shreayd",
      users: 80,
      twitter_followers: 3000,
      github_stars: 1500,
    },
    {
      name: "Gaurav Singh",
      twitter_handle: "@gauravsingh",
      github_username: "gauravsingh454545",
      users: 80,
      twitter_followers: 3000,
      github_stars: 1500,
    },
    // Add more dummy data items as needed
  ];

  return (
    <div>
      <Leaderboard
        className="max-w-4xl"
        theme="amber"
        scoringMetric="users"
        id="name"
        cell1="twitter_handle"
        cell2="github_username"
        cell3="users"
        cell4="twitter_followers"
        cell5="github_stars"
        items={dummyData}
      ></Leaderboard>
    </div>
  );
};

export default LeaderboardPage;
