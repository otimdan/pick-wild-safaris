export default function BlogNewsletter() {
  return (
    <section className="blog-newsletter">
      <h2>Safari Newbie? Start Here</h2>
      <p>
        Grab our free 24-page guide packed with tips on when to travel, what
        to pack, and how to plan your dream adventure.
      </p>
      <form className="blog-newsletter-form">
        <input type="email" placeholder="Your email address" required />
        <button type="submit">Get My Free Guide</button>
      </form>
    </section>
  );
}
