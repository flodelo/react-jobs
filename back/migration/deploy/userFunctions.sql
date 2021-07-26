-- Deploy jobboard:userFunctions to pg

BEGIN;

CREATE FUNCTION add_user(json) RETURNS "user" AS $$
    INSERT INTO "user" (firstName, lastName, email, password, role)
    VALUES(
		$1->>'firstName', 
		$1->>'lastName', 
		$1->>'email', 
		$1->>'password', 
		$1->>'role'
	)
	RETURNING *
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_user(json) RETURNS void AS $$
    UPDATE "user" SET
		firstName=$1->>'firstName', 
		lastName=$1->>'lastName', 
		email=$1->>'email', 
		password=$1->>'password', 
		role=$1->>'role'
	WHERE id=($1->>'id')::int
$$ LANGUAGE SQL STRICT;

COMMIT;
