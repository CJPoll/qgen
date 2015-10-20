defmodule Qgen.CharacterView do
  use Qgen.Web, :view

  def render("index.json", %{characters: characters}) do
    %{data: render_many(characters, Qgen.CharacterView, "character.json")}
  end

  def render("show.json", %{character: character}) do
    %{data: render_one(character, Qgen.CharacterView, "character.json")}
  end

  def render("character.json", %{character: character}) do
    %{id: character.id,
      first_name: character.first_name,
      last_name: character.last_name,
      backstory: character.backstory,
      private_backstory: character.private_backstory,
      user_id: character.user_id,
      background_id: character.background_id,
      campaign_id: character.campaign_id}
  end
end
