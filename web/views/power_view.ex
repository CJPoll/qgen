defmodule Qgen.PowerView do
  use Qgen.Web, :view

  def render("index.json", %{powers: powers}) do
    %{data: render_many(powers, Qgen.PowerView, "power.json")}
  end

  def render("show.json", %{power: power}) do
    %{data: render_one(power, Qgen.PowerView, "power.json")}
  end

  def render("power.json", %{power: power}) do
    %{id: power.id,
      name: power.name,
      description: power.description}
  end
end
