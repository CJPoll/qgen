defmodule Qgen.CharacterTest do
  use Qgen.ModelCase

  alias Qgen.Character

  @valid_attrs %{backstory: "some content", first_name: "some content", last_name: "some content", private_backstory: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Character.changeset(%Character{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Character.changeset(%Character{}, @invalid_attrs)
    refute changeset.valid?
  end
end
