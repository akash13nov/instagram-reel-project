const reels = [
  {
    userName: "Akash Sharma",
    likeCount: 12000,
    isLiked: true,
    commentCount: 340,
    caption: "Enjoying the sunset vibes 🌅",
    video: "./reels/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 210,
    isFollowed: true,
  },
  {
    userName: "Neha Singh",
    likeCount: 48000,
    isLiked: false,
    commentCount: 1240,
    caption: "Fitness is life 💪",
    video: "./reels/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 420,
    isFollowed: false,
  },
  {
    userName: "Akshay Verma",
    likeCount: 1500,
    isLiked: false,
    commentCount: 78,
    caption: "Travel with passion ✈️",
    video: "./reels/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    shareCount: 90,
    isFollowed: false,
  },
  {
    userName: "Simran Kaur",
    likeCount: 9100,
    isLiked: true,
    commentCount: 315,
    caption: "Weekend party mode 🥳",
    video: "./reels/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 173,
    isFollowed: true,
  },
  {
    userName: "Karan Patel",
    likeCount: 7200,
    isLiked: true,
    commentCount: 210,
    caption: "Coding + Coffee = Perfect 🍵",
    video: "./reels/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/18.jpg",
    shareCount: 130,
    isFollowed: false,
  },
  {
    userName: "Aditi Mishra",
    likeCount: 52000,
    isLiked: true,
    commentCount: 1580,
    caption: "New recipe!! 😍",
    video: "./reels/6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/27.jpg",
    shareCount: 680,
    isFollowed: true,
  },
  {
    userName: "Harsh Gupta",
    likeCount: 300,
    isLiked: false,
    commentCount: 15,
    caption: "Morning workout jog 🏃",
    video: "./reels/7.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/40.jpg",
    shareCount: 12,
    isFollowed: false,
  },
  {
    userName: "Mukesh Rao ",
    likeCount: 5000,
    isLiked: true,
    commentCount: 890,
    caption: "Dance challenge 🔥",
    video: "./reels/8.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/16.jpg",
    shareCount: 300,
    isFollowed: true,
  },
  {
    userName: "Priya Sharma",
    likeCount: 13000,
    isLiked: true,
    commentCount: 1430,
    caption: "Motivation for Monday ☀️",
    video: "./reels/9.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/5.jpg",
    shareCount: 200,
    isFollowed: true,
  },
  {
    userName: "Riya Kapoor",
    likeCount: 78000,
    isLiked: true,
    commentCount: 2450,
    caption: "Fashion styling 💃",
    video: "./reels/10.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/60.jpg",
    shareCount: 880,
    isFollowed: true,
  },
];
const reelSection = document.querySelector(".reels-section");
function allData() {
  let addData = "";

  reels.forEach(function (data, idx) {
    addData =
      addData +
      `<div class="reels">
    <video class="main-video" src="${data.video}" autoplay loop muted></video>
          <div class="bottom-info">
            <div class="user">
              <img
                src="${data.userProfile}"
                alt=""
              />
              <h4>${data.userName}</h4>
              <button id="${idx}" class="follow">${
        data.isFollowed ? "Unfollow" : "Follow"
      }</button>
            </div>
            <h2>${data.caption}</h2>
          </div>
          <div class="right-info">
            <div id="${idx}" class="like-icon">
              ${
                data.isLiked
                  ? '<i class="ri-heart-3-fill love"></i>'
                  : '<i class="ri-heart-3-line"></i>'
              }
              <p>${data.likeCount}</p>
            </div>
            <div class="comment-icon">
              <i class="ri-chat-ai-3-line"></i>
              <p>${data.commentCount}</p>
            </div>
            <div class="share-icon">
              <i class="ri-share-forward-line"></i>
              <p>${data.shareCount}</p>
            </div>
            <div class="menu-icon">
              <i class="ri-more-2-fill"></i>
            </div>
          </div>
        </div>`;
  });

  reelSection.innerHTML = addData;
}

allData();
reelSection.addEventListener("click", function (dets) {
  if (dets.target.className == "like-icon") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    allData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    allData();
  }
});
