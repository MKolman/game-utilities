<template>
  <div class="container">
    <h1>Bombs Rules</h1>
    <h2>0. Setup</h2>
    <ul>
      <li>Each player starts with four cards (1 bomb and 3 flowers).</li>
      <li>Choose a player to go first.</li>
    </ul>

    <h2>1. Start of round</h2>
    <p>
      Each player secretly places one card face down in front of them.
    </p>

    <h2>2. Placing cards</h2>
    <p>
      Starting with first player and continuing clockwise each player has to
      either
    </p>
    <ul>
      <li>place an additional card to the stack in front of them,</li>
      <li>
        bid a number greater or equal to 1 (game moves to the bidding stage).
      </li>
    </ul>

    <h2>3. Bidding stage</h2>
    <p>
      After the first players makes a bid the players go in clockwise order and
      have to either
    </p>
    <ul>
      <li>increase the number,</li>
      <li>pass (the player is out for the remainder of the round).</li>
    </ul>
    <p>
      This continues until all but one player have passed or when the bid
      reaches the number of all cards placed this round.
    </p>

    <h2>4. Revealing cards</h2>
    <p>
      The player with the winning bid tries to flip over cards without revealing
      a bomb by
    </p>
    <ul>
      <li>revealing all their cards before they can reveal other's,</li>
      <li>revealing cards from top to bottom as they were placed.</li>
    </ul>
    <p>
      This continues until they reveal number of cards equal to their bid.
    </p>

    <p>
      <b> Failure </b> <br />
      If the player reveals a bomb they lose one of their cards. If the bomb was
      in the player's own stack they can choose which card to discard, otherwise
      a random card is chosen by the owner of the revealed bomb card.
      <br />
      When a player loses all their cards they get eliminated from the game. If
      all but one player get eliminated that player is the winner.
    </p>
    <p>
      <b> Success </b> <br />
      If the player manages to reveal nothing but flowers they get a point. If a
      player gets 2 points they win.
    </p>

    <h2>5. New round</h2>
    <p>
      Repeat this process starting with step 1. Whoever bid the highest in the
      bidding stage is the start player.
    </p>
    <p>
      If the player lost his last card, they are out of the game. <br />
      The new starting player is as follows:
    </p>
    <ul>
      <li>
        if the player lost with his own bomb, he chooses the new starting
        player,
      </li>
      <li>
        if the player lost on another player's bomb, that player is the new
        starting player.
      </li>
    </ul>

    <HalfButton style="margin-top: 1em;" to="/bombs" :primary="true">
      Play Now
    </HalfButton>
  </div>
</template>

<script>
export default {
  name: "bombRules"
};
</script>
<style scoped lang="scss">
ul {
  text-align: left;
}
</style>
