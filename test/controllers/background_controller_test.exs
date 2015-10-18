defmodule Qgen.BackgroundControllerTest do
  use Qgen.ConnCase

  alias Qgen.Background
  @valid_attrs %{}
  @invalid_attrs %{}

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, background_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    background = Repo.insert! %Background{}
    conn = get conn, background_path(conn, :show, background)
    assert json_response(conn, 200)["data"] == %{"id" => background.id}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_raise Ecto.NoResultsError, fn ->
      get conn, background_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, background_path(conn, :create), background: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Background, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, background_path(conn, :create), background: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    background = Repo.insert! %Background{}
    conn = put conn, background_path(conn, :update, background), background: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Background, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    background = Repo.insert! %Background{}
    conn = put conn, background_path(conn, :update, background), background: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    background = Repo.insert! %Background{}
    conn = delete conn, background_path(conn, :delete, background)
    assert response(conn, 204)
    refute Repo.get(Background, background.id)
  end
end
