use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :qgen, Qgen.Endpoint,
  secret_key_base: "zGa3z72mrzK9+7v3Kyt3O2FkLsrbQXWfEtw0NyGDFamOzV/JnhDqs51fgoE1QpSB"

# Configure your database
config :qgen, Qgen.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "qgen_prod",
  pool_size: 20
