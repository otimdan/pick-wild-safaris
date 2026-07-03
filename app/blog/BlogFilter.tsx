// app/blog/BlogFilter.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openGroups, setOpenGroups] = useState<string[]>(["Destinations"]);
  const [selected, setSelected] = useState<string[]>([]);

  // Sync checkboxes from URL on mount
  useEffect(() => {
    const cats = searchParams.getAll("category");
    setSelected(cats);
  }, [searchParams]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const toggleItem = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const applyFilter = () => {
    const params = new URLSearchParams();
    selected.forEach((cat) => params.append("category", cat));
    // Replace URL without hash, scroll to top of grid
    router.push(`/blog${selected.length ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  const clearFilter = () => {
    setSelected([]);
    router.push("/blog", { scroll: false });
  };

  return (
    <aside className="blog-filter">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h4 style={{ margin: 0 }}>Categories</h4>
        {selected.length > 0 && (
          <button
            onClick={clearFilter}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.7rem",
              color: "#c8922a",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Clear all
          </button>
        )}
      </div>

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
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleItem(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button className="blog-filter-apply" type="button" onClick={applyFilter}>
        {selected.length > 0
          ? `Apply Filter (${selected.length})`
          : "Apply Filter"}
      </button>
    </aside>
  );
}
