document.getElementById('generateStoryButton').addEventListener('click', generateStory);

function generateStory() {
    const storyContainer = document.getElementById('storyContainer');
    const stories = [
        "Once upon a time in a faraway land, there was a brave knight who set out on an epic quest.",
        "In a small village, a young girl discovered a magical amulet that could grant her three wishes.",
        "High in the mountains, an old wizard lived in a secluded tower, guarding ancient secrets.",
        "Deep in the enchanted forest, a group of friends embarked on a journey to find a lost treasure.",
        "On a stormy night, a shipwrecked sailor washed ashore on a mysterious island filled with strange creatures."
    ];
    
    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];
    
    storyContainer.innerHTML = randomStory;
}
