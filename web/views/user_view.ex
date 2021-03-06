defmodule Qgen.UserView do
  use Qgen.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Qgen.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Qgen.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name}
  end

  def render("empty.json", _assigns) do
    %{}
  end
end

