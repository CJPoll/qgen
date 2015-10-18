defmodule Qgen.PowerTest do
  use Qgen.ModelCase

  alias Qgen.Power

  @valid_attrs %{description: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Power.changeset(%Power{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Power.changeset(%Power{}, @invalid_attrs)
    refute changeset.valid?
  end
end
