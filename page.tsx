export const metadata = { title: 'Wylogowanie' };

export default function LogoutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Wylogowano</h1>
      <p className="text-sm text-muted-foreground">
        Zostałeś bezpiecznie wylogowany.
      </p>
    </section>
  );
}
