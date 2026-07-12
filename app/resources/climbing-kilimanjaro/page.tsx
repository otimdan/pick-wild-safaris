// app/resources/climbing-kilimanjaro/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://pickwildsafaris.com";

export const metadata: Metadata = {
  title: "Climbing Mount Kilimanjaro: The Complete Guide | Pick Wild Safaris",
  description:
    "Everything you need to climb Mount Kilimanjaro — the seven routes compared, the best time to climb, altitude and acclimatisation, training, costs, and what to pack.",
  alternates: { canonical: `${BASE_URL}/resources/climbing-kilimanjaro` },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/resources/climbing-kilimanjaro`,
    title: "Climbing Mount Kilimanjaro: The Complete Guide",
    description:
      "Routes compared, best seasons, acclimatisation, training and costs for reaching Uhuru Peak — Africa's highest summit.",
    siteName: "Pick Wild Safaris",
  },
};

export default function KilimanjaroPage() {
  return (
    <LegalPageLayout
      title="Climbing Mount Kilimanjaro"
      intro={
        <>
          <p>
            At <strong>5,895 metres (19,341 ft)</strong>, Mount Kilimanjaro in
            Tanzania is the highest peak in Africa and the tallest free-standing
            mountain on Earth. Reaching Uhuru Peak is a genuine bucket-list
            achievement &mdash; and, with the right route and preparation, it is
            attainable for fit, determined trekkers with no technical climbing
            experience.
          </p>
          <p>
            This guide covers how to choose your route, when to go, and how to give
            yourself the best possible chance of standing on the roof of Africa.
          </p>
        </>
      }
    >
      <h2>The Mountain at a Glance</h2>
      <ul>
        <li>
          <strong>Summit:</strong> Uhuru Peak, 5,895 m (19,341 ft)
        </li>
        <li>
          <strong>Location:</strong> Kilimanjaro National Park, northern Tanzania
        </li>
        <li>
          <strong>Duration:</strong> 5 to 9 days on the mountain, depending on
          route
        </li>
        <li>
          <strong>Technical difficulty:</strong> non-technical &mdash; it is a
          high-altitude trek, not a climb, with no ropes or ice axes required
        </li>
        <li>
          <strong>The real challenge:</strong> altitude. Success depends far more
          on acclimatisation than on raw fitness.
        </li>
      </ul>

      <h2>Choosing Your Route</h2>
      <p>
        Kilimanjaro has seven established routes. The single biggest factor in
        reaching the summit is <strong>how many days you spend on the mountain</strong>{" "}
        &mdash; more days means better acclimatisation and a much higher success
        rate. Longer routes are almost always worth the extra time.
      </p>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Route</th>
              <th>Days</th>
              <th>Difficulty</th>
              <th>Scenery</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lemosho</td>
              <td>7&ndash;8</td>
              <td>Moderate</td>
              <td>Excellent, varied</td>
              <td>Our top pick &mdash; scenic with high success rates</td>
            </tr>
            <tr>
              <td>Machame</td>
              <td>6&ndash;7</td>
              <td>Moderate/Hard</td>
              <td>Excellent</td>
              <td>Popular &quot;Whiskey&quot; route, great value</td>
            </tr>
            <tr>
              <td>Northern Circuit</td>
              <td>9</td>
              <td>Moderate</td>
              <td>Outstanding, quietest</td>
              <td>Highest success rate, best acclimatisation</td>
            </tr>
            <tr>
              <td>Rongai</td>
              <td>6&ndash;7</td>
              <td>Moderate</td>
              <td>Remote, drier</td>
              <td>Approaches from the north; good in wet season</td>
            </tr>
            <tr>
              <td>Marangu</td>
              <td>5&ndash;6</td>
              <td>Moderate</td>
              <td>Less varied</td>
              <td>Only route with hut accommodation; lower success</td>
            </tr>
            <tr>
              <td>Umbwe</td>
              <td>6</td>
              <td>Hard</td>
              <td>Dramatic, steep</td>
              <td>Experienced trekkers seeking a challenge</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For most travellers we recommend <strong>Lemosho</strong> or the{" "}
        <strong>Northern Circuit</strong>: they offer the best balance of scenery,
        gradual acclimatisation, and summit success.
      </p>

      <h2>Best Time to Climb</h2>
      <p>
        Kilimanjaro can be climbed year-round, but the two dry seasons are by far
        the most reliable:
      </p>
      <ul>
        <li>
          <strong>January to mid-March</strong> &mdash; warmer, clear mornings,
          quieter trails, and often snow at the summit.
        </li>
        <li>
          <strong>June to October</strong> &mdash; the long dry season and the
          most popular window, with stable conditions.
        </li>
      </ul>
      <p>
        The long rains (late March to May) and short rains (November) make trails
        muddier and views less certain, though prices and crowds are lower.
      </p>

      <h2>Altitude &amp; Acclimatisation</h2>
      <p>
        Altitude is what turns people back, not the terrain. As you climb, the air
        thins and mild altitude symptoms &mdash; headache, breathlessness, poor
        sleep &mdash; are common. The keys to managing it:
      </p>
      <ul>
        <li>
          <strong>Go slowly.</strong> Your guides will repeat{" "}
          <em>&quot;pole pole&quot;</em> (Swahili for &quot;slowly, slowly&quot;)
          &mdash; and they mean it. A deliberate pace is the secret to summiting.
        </li>
        <li>
          <strong>Choose a longer route</strong> that follows the &quot;climb
          high, sleep low&quot; principle.
        </li>
        <li>
          <strong>Hydrate</strong> &mdash; aim for 3&ndash;4 litres of water a day.
        </li>
        <li>
          Discuss <strong>altitude medication</strong> (such as acetazolamide)
          with your doctor before you travel.
        </li>
        <li>
          Tell your guides how you feel. They monitor everyone daily and know when
          to act.
        </li>
      </ul>

      <h2>Training &amp; Fitness</h2>
      <p>
        You do not need to be an athlete, but you should arrive fit and confident
        on your feet. Start training <strong>2 to 3 months ahead</strong>:
      </p>
      <ul>
        <li>
          Regular cardio &mdash; hiking, running, cycling, or stair climbing.
        </li>
        <li>
          Long day hikes on hills or trails, ideally in the boots you will wear on
          the mountain.
        </li>
        <li>Leg and core strength work to handle long descents.</li>
        <li>
          If you can, train with a loaded daypack (5&ndash;7 kg) to mimic summit
          day.
        </li>
      </ul>

      <h2>What to Pack</h2>
      <p>
        Kilimanjaro passes through five climate zones &mdash; from rainforest to
        arctic summit &mdash; so layering is everything. Your operator provides
        tents, meals, and porters; you bring your personal gear:
      </p>
      <ul>
        <li>
          A warm, four-season sleeping bag and an insulated jacket for summit
          night (temperatures fall well below freezing).
        </li>
        <li>
          Waterproof jacket and trousers, thermal base layers, fleece mid-layers.
        </li>
        <li>
          Broken-in waterproof hiking boots, plus warm and liner socks.
        </li>
        <li>
          Warm hat, sun hat, glove liners and warm gloves, buff, and UV
          sunglasses.
        </li>
        <li>
          Headtorch with spare batteries, trekking poles, a 2&ndash;3 litre
          hydration system, and high-SPF sunscreen.
        </li>
        <li>Personal first-aid kit, blister care, and any prescribed medication.</li>
      </ul>

      <h2>Costs &amp; What&apos;s Included</h2>
      <p>
        A quality, safety-first Kilimanjaro climb is not the place to cut corners
        &mdash; reputable operators pay park fees, fair porter wages, and provide
        proper equipment and guide training. A well-run trek typically includes
        park and camping fees, professional guides and porters, all mountain
        meals, tents, and transfers to and from the gate. Flights, visas, tips,
        travel insurance, and personal gear are usually extra.
      </p>
      <p>
        Many climbers pair Kilimanjaro with a Tanzania safari or a Zanzibar beach
        stay afterwards &mdash; a perfect way to rest tired legs. We can build the
        whole trip around your climb.
      </p>

      <div className="legal-contact">
        <p>
          <strong>Ready to take on the roof of Africa?</strong>
        </p>
        <p>
          We arrange fully supported, safety-led Kilimanjaro climbs on every major
          route. <a href="/contact">Talk to our team</a> about dates, routes, and
          combining your climb with a safari.
        </p>
      </div>
    </LegalPageLayout>
  );
}
