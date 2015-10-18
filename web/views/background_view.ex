defmodule Qgen.BackgroundView do
  use Qgen.Web, :view

  def render("index.json", %{backgrounds: backgrounds}) do
    %{data: render_many(backgrounds, Qgen.BackgroundView, "background.json")}
  end

  def render("show.json", %{background: background}) do
    %{data: render_one(background, Qgen.BackgroundView, "background.json")}
  end

  def render("background.json", %{background: background}) do
    %{id: background.id, name: background.name, description: background.description}
  end
end
