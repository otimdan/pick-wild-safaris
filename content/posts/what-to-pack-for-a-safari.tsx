import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";

const meta = getPostMeta("what-to-pack-for-a-safari")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>

      <p>
        Most people pack too much. Safari vehicles have limited luggage space
        (particularly on bush flights between camps, which cap bags at 15kg soft-sided),
        and you&apos;ll be in the same vehicle or walking the same trails every
        day. You don&apos;t need outfit variety. You need the right gear.
      </p>

      <p>
        Here&apos;s what actually matters.
      </p>

      <h2>Clothing</h2>

      <p>
        The golden rule: neutral colours. Khaki, olive, tan, brown, grey.
        Bright colours startle wildlife and attract insects. White gets
        dirty immediately. Camouflage is illegal in several African countries
        (Uganda, Rwanda, Kenya among them) — avoid it entirely.
      </p>

      <ul>
        <li>3–4 lightweight long-sleeved shirts (moisture-wicking, quick-dry)</li>
        <li>2 pairs of lightweight trousers — convertible zip-off are useful</li>
        <li>1 pair of shorts for warm afternoons at the lodge</li>
        <li>Fleece or mid-layer jacket — mornings on the game drive are cold</li>
        <li>Waterproof outer jacket (rain and wind)</li>
        <li>Comfortable walking shoes or lightweight hiking boots</li>
        <li>Sandals for evenings</li>
        <li>Wide-brimmed hat</li>
        <li>Underwear and socks (merino wool is excellent — it dries fast and doesn&apos;t smell)</li>
        <li>Swimsuit if your lodge has a pool</li>
        <li>Warm beanie if going to altitude (Bwindi, Mgahinga, Kilimanjaro)</li>
      </ul>

      <h2>Gear and Accessories</h2>

      <ul>
        <li>
          <strong>Binoculars</strong> — arguably the single most important item.
          8x42 is the standard safari binocular; 10x42 if you want more magnification.
          Don&apos;t skimp on these.
        </li>
        <li>
          <strong>Camera</strong> — phone cameras are better than you think for
          close wildlife. For serious photography, a 100–400mm zoom lens is the
          sweet spot. Bring more memory cards than you think you need.
        </li>
        <li>
          <strong>Power bank</strong> — vehicle charging is available in most game
          drives but not always reliable
        </li>
        <li>Universal travel adapter</li>
        <li>Headlamp (not a torch — you need your hands free)</li>
        <li>
          Dry bag or ziplock bags — dust and occasional rain will get into everything
        </li>
        <li>Lightweight daypack for gorilla or chimp trekking days</li>
      </ul>

      <h2>Health and Toiletries</h2>

      <ul>
        <li>
          <strong>Malaria prophylaxis</strong> — speak to a travel doctor before
          your trip. Uganda is a malaria zone. Doxycycline, Malarone, or Lariam
          depending on your medical history.
        </li>
        <li>
          <strong>DEET insect repellent (50% concentration)</strong> — the
          lower-strength products don&apos;t work reliably in the tropics
        </li>
        <li>High-SPF sunscreen (factor 50 minimum)</li>
        <li>Lip balm with SPF</li>
        <li>Hand sanitiser</li>
        <li>Basic first aid kit (blister plasters especially)</li>
        <li>Antihistamine tablets</li>
        <li>Immodium and rehydration sachets</li>
        <li>Any prescription medication in original packaging with a doctor&apos;s letter</li>
        <li>
          Altitude sickness medication (Diamox) if you&apos;re doing anything
          above 2,500m — discuss with your doctor first
        </li>
      </ul>

      <h2>Documents and Admin</h2>

      <ul>
        <li>Passport (valid for 6+ months beyond travel dates)</li>
        <li>Printed copies of all permits (gorilla, chimp, Kilimanjaro)</li>
        <li>Travel insurance documents — comprehensive policy including medical evacuation</li>
        <li>Yellow fever vaccination certificate (required for entry into Uganda)</li>
        <li>Emergency contacts list on paper, not just in your phone</li>
      </ul>

      <h2>What to Leave at Home</h2>

      <ul>
        <li>Anything you&apos;d be devastated to lose</li>
        <li>Expensive jewellery</li>
        <li>More than 2 pairs of shoes (heavy and bulky)</li>
        <li>Hair dryers or straighteners (power adapters vary, luggage space is limited)</li>
        <li>Half your wardrobe — most lodges offer laundry service</li>
      </ul>

      <h2>The Soft-Sided Bag Rule</h2>

      <p>
        If your itinerary includes any bush flights between camps — and many Uganda
        itineraries do — you will be required to use a soft-sided bag (duffel-style),
        not a hard-shell suitcase. Hard cases don&apos;t fit in the small Cessna
        luggage holds. Most lodges and camps have storage for any items you
        don&apos;t need at the next destination.
      </p>

      <p>
        Our recommended approach: one soft-sided 15kg bag plus a small personal
        daypack. Everything you need, nothing you don&apos;t.
      </p>

    </BlogPostLayout>
  );
}
