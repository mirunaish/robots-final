import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import Header from "../components/Header";
import "./FinalExplanation.css";

const FinalExplanation = () => {
  return (
    <div className="explanation-page">
      <Header>
        <Link to={ROUTES.FINAL_GAME}>
          <button className="primary">Go to game</button>
        </Link>
      </Header>

      <div className="text-section">
        <h2>A short explanation</h2>
        <p>
          I have long felt an internal conflict about AI. I don't know what to
          believe about it. I think I'm right in the center between the two
          sides of this argument, as I am majoring in Computer Science and
          minoring in Digital Arts. In Computer Science spaces, people talk
          casually about using it, are excited about its integration into daily
          life, try to brainstorm AI startup ideas, use it in class, even for
          art and design work. In arts spaces, I hear about the massive negative
          effects of AI on the environment and communities, stories of artists'
          work being stolen and how upsetting and demoralizing it is, users
          being excluded from the artist community because they were found to
          use AI even a little bit. I see good points on both sides.
        </p>
        <p>
          The scientist in me wants to embrace technological progress and reject
          the idea that consciousness is a magical thing that defies the laws of
          physics and makes humans better than robots. But the artist in me
          wants to believe that there is something about humanity that cannot be
          replicated, or should not be replicated, by AI; something worth
          protecting from the environmental damage and loss of jobs.
        </p>
        <p>
          So I made this story game as a way to think through some of these
          conflicting ideas.
        </p>
        <p>
          The title, "The Human Machine," has a double meaning: the first refers
          to a machine with human qualities. The second refers to humans as a
          kind of biological machine.
        </p>
        <p>
          There are two main characters, one human and one AI/robot. They are
          meant to represent the two opposing voices in my head, and have
          conversations that I have had with myself. Their names have meanings
          relevant to the story:
        </p>
        <p>
          The name Micah means "Who is like God?" - a rhetorical question, with
          the obvious answer, "no one." No one is like God, who created the
          universe and humanity - and yet, humans are trying to create sentient
          machines, create a new form of consciousness, which is something only
          God should be able to do. Here, the answer to "who is like God?" is
          different: humans are like God, because they created AI. Or perhaps
          robots themselves, with their near-omniscience, are the ones
          approaching the status of divinity...
        </p>
        <p>
          The name Jordan refers to the Jordan river, which was itself named a
          word meaning "descend" or "flow down". It invokes movement, fluidity -
          like the AI that learns and evolves. But it could also mean a
          figurative descent, a downfall - perhaps a symbol of humanity's doom
          at the hands of AI?
        </p>
        <p>
          Text adventure games are usually straightforward, quick-paced, and
          action-focused. I also had a list of specific ideas I wanted to convey
          in my story, but I realized that what I'm trying to say might not be
          as obvious to a reader as it is to me if I leave it up for
          interpretation. So I tried to strike a balance between enough
          "telling" to explain my ideas properly, and some action to "show" them
          in practice. I don't think I nailed that balance, so if it feeels a
          little flat or on-the-nose, I apologize.
        </p>
        <br />
        <p>
          Click on the title on the top left of any page to come back to this
          explanation.
        </p>
      </div>
      <Link to={ROUTES.FINAL_GAME}>
        <button style={{ fontSize: 24 }} className="primary">
          Go to game
        </button>
      </Link>
    </div>
  );
};

export default FinalExplanation;
