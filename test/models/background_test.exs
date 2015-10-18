defmodule Qgen.BackgroundTest do
  use Qgen.ModelCase

  alias Qgen.Background

  @valid_attrs %{description: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Background.changeset(%Background{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Background.changeset(%Background{}, @invalid_attrs)
    refute changeset.valid?
  end
end
