"use client";

export default function DemoPage() {

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">Theme Demo Page</h1>
          <p className="text-muted-foreground mb-8 text-xl">
            Demonstración de todos los tokens de color usando HSL y next-themes
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-foreground mb-8 text-3xl font-bold">Color Tokens</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">
                Background & Foreground
              </h3>
              <div className="space-y-2">
                <div className="bg-background text-foreground rounded border p-3">
                  text-foreground on bg-background
                </div>
                <div className="bg-card text-card-foreground rounded border p-3">
                  text-card-foreground on bg-card
                </div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">Primary Colors</h3>
              <div className="space-y-2">
                <div className="bg-primary text-primary-foreground rounded p-3">
                  text-primary-foreground on bg-primary
                </div>
                <div className="text-primary rounded border p-3">text-primary</div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">Secondary Colors</h3>
              <div className="space-y-2">
                <div className="bg-secondary text-secondary-foreground rounded p-3">
                  text-secondary-foreground on bg-secondary
                </div>
                <div className="text-secondary-foreground rounded border p-3">
                  text-secondary-foreground
                </div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">Muted Colors</h3>
              <div className="space-y-2">
                <div className="bg-muted text-muted-foreground rounded p-3">
                  text-muted-foreground on bg-muted
                </div>
                <div className="text-muted-foreground rounded border p-3">
                  text-muted-foreground
                </div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">Accent Colors</h3>
              <div className="space-y-2">
                <div className="bg-accent text-accent-foreground rounded p-3">
                  text-accent-foreground on bg-accent
                </div>
                <div className="text-accent-foreground rounded border p-3">
                  text-accent-foreground
                </div>
              </div>
            </div>

            <div className="bg-card border-border rounded-lg border p-6">
              <h3 className="text-card-foreground mb-4 text-lg font-semibold">Borders & Inputs</h3>
              <div className="space-y-2">
                <div className="border-border rounded border-2 p-3">border-border</div>
                <input
                  className="border-input bg-background text-foreground w-full rounded border p-3"
                  placeholder="Input with border-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-foreground mb-8 text-3xl font-bold">Interactive Elements</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-card-foreground text-xl font-semibold">Buttons</h3>
              <div className="space-y-3">
                <button className="bg-primary text-primary-foreground w-full rounded px-4 py-2 transition-opacity hover:opacity-90">
                  Primary Button
                </button>
                <button className="bg-secondary text-secondary-foreground w-full rounded px-4 py-2 transition-opacity hover:opacity-90">
                  Secondary Button
                </button>
                <button className="bg-accent text-accent-foreground w-full rounded px-4 py-2 transition-opacity hover:opacity-90">
                  Accent Button
                </button>
                <button className="border-border text-foreground hover:bg-muted w-full rounded border px-4 py-2 transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-card-foreground text-xl font-semibold">Cards</h3>
              <div className="bg-card border-border rounded-lg border p-4">
                <h4 className="text-card-foreground mb-2 text-lg font-semibold">Card Title</h4>
                <p className="text-muted-foreground mb-4">
                  This is a card with proper color tokens. The text uses muted-foreground for better
                  hierarchy.
                </p>
                <button className="bg-primary text-primary-foreground rounded px-3 py-1 text-sm">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-foreground mb-8 text-3xl font-bold">Focus States</h2>

          <div className="space-y-4">
            <input
              className="border-input bg-background text-foreground focus:ring-ring w-full rounded border p-3 focus:border-transparent focus:ring-2 focus:outline-none"
              placeholder="Input with focus ring"
            />
            <button className="bg-primary text-primary-foreground focus:ring-ring focus:ring-offset-background rounded px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none">
              Button with focus ring
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
