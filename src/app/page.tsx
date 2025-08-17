import Link from "next/link";

function FeatureCard({
  title,
  description,
  href,
  cta,
  badge,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
  badge?: string;
}) {
  return (
    <div className="group relative rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      {badge ? (
        <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow">
          {badge}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
        >
          {cta}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className="space-y-10">
      {/* HERO */}
      <header className="rounded-3xl border bg-card/90 p-8 shadow-sm">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CLT HUB</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Wiedza i narzędzia o Cross-Laminated Timber. Dostęp{" "}
              <strong>BASIC</strong> i <strong>PRO</strong>, galeria rozwiązań
              oraz kontakt z nami — wszystko w jednym miejscu.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/basic"
              className="rounded-lg border px-4 py-2 transition hover:bg-muted"
            >
              Przeglądaj BASIC
            </Link>
            <Link
              href="/pro"
              className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
            >
              Wejdź do PRO
            </Link>
          </div>
        </div>
      </header>

      {/* GRID Z FUNKCJAMI */}
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Baza wiedzy (BASIC)"
          description="Artykuły, odpowiedzi i materiały startowe. Idealne do szybkiego wyszukania podstaw i dobrych praktyk CLT."
          href="/basic"
          cta="Otwórz bazę"
          badge="BASIC"
        />
        <FeatureCard
          title="Strefa PRO"
          description="Zaawansowane narzędzia i kalkulatory. Dostęp weryfikowany tokenem — użytkownicy PRO widzą także treści BASIC."
          href="/pro"
          cta="Przejdź do PRO"
          badge="PRO"
        />
      </div>

      {/* GALERIA – PREVIEW */}
      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Galeria CLT</h2>
          <Link
            href="/gallery"
            className="text-sm underline decoration-primary/30 underline-offset-4 hover:text-primary"
          >
            Zobacz całą galerię
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {/* Podmień ścieżki na swoje pliki w /public/gallery */}
          {["1.jpg", "2.jpg", "3.jpg", "4.jpg"].map((n) => (
            <Link
              key={n}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border"
            >
              <img
                src={`/gallery/${n}`}
                alt="CLT"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="rounded-2xl border bg-card p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Masz pytania? Napisz do nas — odpowiemy najszybciej jak to możliwe.
        </p>

        {/* Netlify Forms (działa bez backendu) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="mt-4 grid gap-3 md:grid-cols-2"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label className="col-span-1">
            <span className="mb-1 block text-sm">Imię i nazwisko</span>
            <input
              name="name"
              required
              className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-2 ring-transparent focus:ring-ring"
              placeholder="Jan Kowalski"
            />
          </label>

          <label className="col-span-1">
            <span className="mb-1 block text-sm">E-mail</span>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-2 ring-transparent focus:ring-ring"
              placeholder="jan@example.com"
            />
          </label>

          <label className="md:col-span-2">
            <span className="mb-1 block text-sm">Wiadomość</span>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border bg-background px-3 py-2 outline-none ring-2 ring-transparent focus:ring-ring"
              placeholder="Napisz, w czym możemy pomóc…"
            />
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-primary-foreground transition hover:opacity-90"
            >
              Wyślij wiadomość
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22 2L15 22l-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </form>
      </section>

      {/* STOPKA KRÓTKA */}
      <footer className="pb-4 pt-2 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CLT HUB — BASIC & PRO
      </footer>
    </section>
  );
}
