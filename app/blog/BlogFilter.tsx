// app/blog/BlogFilter.tsx
"use client";

import { useState } from "react";

const blogCategories = [
  {
    title: "Destinations",
    items: [
      "Botswana",
      "Kenya",
      "Madagascar",
      "Mozambique",
      "Namibia",
      "Rwanda",
      "South Africa",
      "Tanzania",
      "Uganda",
    ],
  },
  {
    title: "Safari Experiences",
    items: [
      "Bush & Beach",
      "Family Safaris",
      "Luxury",
      "Romantic & Honeymoons",
      "Senior Friendly",
      "Solo Travel",
    ],
  },
  {
    title: "Travel Tips",
    items: ["Packing Lists", "Planning Tips", "Visa & Entry Requirements"],
  },
  {
    title: "Wildlife & Hiking",
    items: [
      "Big Five",
      "Bird Watching",
      "Gorilla Trekking",
      "Great Migration",
      "Kilimanjaro",
    ],
  },
];

export default function BlogFilter() {
  const [openGroups, setOpenGroups] = useState<string[]>(["Destinations"]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <aside className="blog-filter">
      <h4>Categories</h4>
      {blogCategories.map((group) => (
        <div
          key={group.title}
          className={`blog-filter-group${openGroups.includes(group.title) ? " open" : ""}`}
        >
          <button
            className="blog-filter-group-title"
            onClick={() => toggleGroup(group.title)}
            type="button"
          >
            {group.title}
            <span className="chevron-small" aria-hidden="true" />
          </button>
          <div className="blog-filter-options">
            {group.items.map((item) => (
              <label key={item} className="blog-filter-option">
                <input type="checkbox" name={item} />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="blog-filter-apply" type="button">
        Apply Filter
      </button>
    </aside>
  );
}
