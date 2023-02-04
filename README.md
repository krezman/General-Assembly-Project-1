# General-Assembly-Project-1
Brick Breaker

This is Brick Breaker and it was my attempt to replicate a classic arcade game but with only DOM manipulation. I chose to make this game because it was one of the very first games I played on my family's old Atari. It also felt like a good challenge for me to make this without using canvas as I was really curious to look into collision detection and how it can be built from the ground up in a relatively simple scenario.

I chose to tackle the multiple collisons that would need to be check by creating a class for all the bricks that would serve as the targets for attaining points and advancing to the next level of the game. Within that class I created simple equations to calculate where all the corners would be for each brick based off one corrdinate, or one corner position of each brick. Each one of those corners would then be stored as attributes of that new class of brick that would be instantiated when they were genereated into the playing window.

With each of those corners stored as known attributes of each brick class, determining whether or not the playing ball crossed inbetween two of those corner served as the basis of collision detection. Then as each brick's edged was detcted for a collision the block would be spliced out of the array that composed the new brick classes.



Short description of your game:

The player has the capability to slide the bottom platform from left to right using the arrow keys to prevent the ball that is bouncing around in the window from moving past the bottom of the windows edge. The goal is keep the ball in the from of the window as long as they can while breaking the bricks that will be created at the top of the screen. Keep the ball up abve the players platform for as long as possible to advance to the next level and beat the game.



Wireframes

https://imgur.com/CiSLZUA

https://imgur.com/H03EkOX



User Stories

As a player, I would like the grid of blocks to be displayed at the top of the window when the game starts.
As a player, I would like to have the ball bounce off my platform when it connects with it.
As a player, I would like the ball to bounce with normal physics that continue a complementary vector of velocity of the ball after making contact with my controllable platform.
As a player, I would like there to be some noise of when the ball makes contact with a brick and I want that brick to be removed and I want the ball to bounce off the edge of the breaking break in a complementary physical manner.
As a player, I want there to be a score counter that will update when I do break a brick.
As a player, I want there to be a ball counter so that I know how many balls I have left on my turn.
As a player, I want the game to inform me when I have completed a level if I have broken all the brick on the page and my ball is still above the bottom threshold of the window.



MVP Goals

Implement a window that has brick displayed on it at the top of the window.
Implement controllability of the bottom moving platform so that the player can move it position from left to right.
Implement ability for the players score to be represented somewhere so that when both players have had their turns they can see who got a higher score.
Implement ability for new levels to generate if a player passes the one they are currently on.


Technologies Used

HTML

JavaScript

CSS