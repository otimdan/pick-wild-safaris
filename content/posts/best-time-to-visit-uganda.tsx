import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";
import Image from "next/image";

function PostImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  if (!src) return null;
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={820}
        height={480}
        className="post-img"
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 1024px) 100vw, 820px"
      />
      {caption && <span className="post-img-caption">{caption}</span>}
    </>
  );
}

const meta = getPostMeta("best-time-to-visit-uganda")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Uganda sits directly on the equator, which means it doesn&apos;t have
        the clear-cut hot and cold seasons many travellers expect. What it has
        instead are dry seasons and wet seasons — and the difference between
        them matters enormously for what your safari will look and feel like.
      </p>

      <h2>The Two Dry Seasons</h2>

      <p>
        Uganda has two distinct dry seasons and these are, generally speaking,
        the best times to visit.
      </p>

      <ul>
        <li>
          <strong>June to September</strong> — The long dry season. This is peak
          safari season for good reason: animals concentrate around water
          sources, vegetation thins out making wildlife easier to spot, and the
          roads are in their best condition. Gorilla trekking permits sell out
          months in advance during this window.
        </li>
        <li>
          <strong>December to February</strong> — The short dry season. Quieter
          than June–September, good for budget-conscious travellers who still
          want reliable weather. Birdwatching is excellent as migratory species
          arrive from the north.
        </li>
      </ul>

      <PostImage
        src=""
        alt="Queen Elizabeth National Park, Uganda"
        caption="Queen Elizabeth National Park — best visited in the dry season"
      />

      <h2>The Two Wet Seasons</h2>

      <p>
        The wet seasons are not as bad as they sound — Uganda&apos;s rainfall is
        rarely the all-day downpours people imagine. It typically rains hard for
        a few hours in the afternoon and then clears.
      </p>

      <ul>
        <li>
          <strong>March to May</strong> — The long rains. Some roads, especially
          in remote areas, become difficult. Gorilla trekking is harder in the
          mud. But prices drop significantly and crowds disappear. The forest is
          impossibly green.
        </li>
        <li>
          <strong>October to November</strong> — The short rains. Similar to
          March–May but shorter and generally lighter. The Bwindi forest during
          this period is stunning.
        </li>
      </ul>

      <h2>Month-by-Month Snapshot</h2>

      <ul>
        <li>
          <strong>January:</strong> Dry, warm, excellent. One of the best
          months.
        </li>
        <li>
          <strong>February:</strong> Dry season winding down. Still good.
        </li>
        <li>
          <strong>March:</strong> Rains beginning. Fewer tourists, lower prices.
        </li>
        <li>
          <strong>April:</strong> Wettest month. For the adventurous or
          budget-focused.
        </li>
        <li>
          <strong>May:</strong> Rains easing. Landscapes are lush and dramatic.
        </li>
        <li>
          <strong>June:</strong> Peak season starts. Book gorilla permits now.
        </li>
        <li>
          <strong>July:</strong> Prime wildlife viewing. Hot and dry.
        </li>
        <li>
          <strong>August:</strong> Peak season. Everything performing at its
          best.
        </li>
        <li>
          <strong>September:</strong> Still excellent. Fewer visitors than
          July/August.
        </li>
        <li>
          <strong>October:</strong> Short rains begin. Prices drop slightly.
        </li>
        <li>
          <strong>November:</strong> Rainy but manageable.
        </li>
        <li>
          <strong>December:</strong> Short dry season begins. Festive period —
          book early.
        </li>
      </ul>

      <h2>What About Gorilla Trekking Specifically?</h2>

      <p>
        The gorillas are there year-round — they don&apos;t migrate. But the
        experience changes significantly with the season. In the dry season the
        forest floor is firm, trails are clear, and trekking is physically
        manageable even for less experienced hikers. In the wet season, trails
        are muddy and steep, and the trek takes longer.
      </p>

      <p>
        The gorillas themselves are sometimes easier to spot in the wet season
        because they tend to move less and stay at lower, more accessible
        altitudes. Trade-offs.
      </p>

      <h2>Chimpanzee Trekking</h2>

      <p>
        Kibale National Park, Uganda&apos;s premier chimpanzee destination, is
        good year-round. The dry seasons make the forest floor more walkable,
        but chimps are active and vocal in the wet season too, and the lush
        canopy makes for incredible photography.
      </p>

      <h2>Our Recommendation</h2>

      <p>
        If you have flexibility, aim for <strong>June–August</strong> for the
        best all-round experience. If you want value and don&apos;t mind a bit
        of mud, <strong>October–November</strong> is genuinely underrated — you
        can often walk into gorilla permits that cancel at the last minute.
      </p>

      <p>
        Whatever month you choose, Uganda will surprise you. It always does.
      </p>
    </BlogPostLayout>
  );
}
