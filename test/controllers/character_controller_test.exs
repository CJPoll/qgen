defmodule Qgen.CharacterControllerTest do
  use Qgen.ConnCase

  alias Qgen.Character
  @valid_attrs %{backstory: "some content", first_name: "some content", last_name: "some content", private_backstory: "some content"}
  @invalid_attrs %{}

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, character_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    character = Repo.insert! %Character{}
    conn = get conn, character_path(conn, :show, character)
    assert json_response(conn, 200)["data"] == %{"id" => character.id,
      "first_name" => character.first_name,
      "last_name" => character.last_name,
      "backstory" => character.backstory,
      "private_backstory" => character.private_backstory,
      "user_id" => character.user_id,
      "background_id" => character.background_id,
      "campaign_id" => character.campaign_id}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_raise Ecto.NoResultsError, fn ->
      get conn, character_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, character_path(conn, :create), character: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Character, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, character_path(conn, :create), character: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    character = Repo.insert! %Character{}
    conn = put conn, character_path(conn, :update, character), character: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Character, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    character = Repo.insert! %Character{}
    conn = put conn, character_path(conn, :update, character), character: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    character = Repo.insert! %Character{}
    conn = delete conn, character_path(conn, :delete, character)
    assert response(conn, 204)
    refute Repo.get(Character, character.id)
  end
end
