defmodule Qgen.PowerControllerTest do
  use Qgen.ConnCase

  alias Qgen.Power
  @valid_attrs %{description: "some content", name: "some content"}
  @invalid_attrs %{}

  setup do
    conn = conn() |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, power_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    power = Repo.insert! %Power{}
    conn = get conn, power_path(conn, :show, power)
    assert json_response(conn, 200)["data"] == %{"id" => power.id,
      "name" => power.name,
      "description" => power.description}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_raise Ecto.NoResultsError, fn ->
      get conn, power_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, power_path(conn, :create), power: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Power, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, power_path(conn, :create), power: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    power = Repo.insert! %Power{}
    conn = put conn, power_path(conn, :update, power), power: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Power, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    power = Repo.insert! %Power{}
    conn = put conn, power_path(conn, :update, power), power: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    power = Repo.insert! %Power{}
    conn = delete conn, power_path(conn, :delete, power)
    assert response(conn, 204)
    refute Repo.get(Power, power.id)
  end
end
