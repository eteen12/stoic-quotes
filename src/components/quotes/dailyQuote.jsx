import quotes from "./quotes.json";

const DailyQuote = () => {
  const currentDate = new Date();
  const id =
    (currentDate.getDate() + currentDate.getMonth() * 31) % quotes.length;

  const { quote, author } = quotes[id];

  return (
    <div>
      <h3>
        &quot;{quote}&quot;- {author}
      </h3>
    </div>
  );
};
export default DailyQuote;
