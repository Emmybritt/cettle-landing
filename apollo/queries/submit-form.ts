import { gql } from "@apollo/client";

export const SUBMIT_FORM = gql`
	mutation CreateCrestalUser($createCrestalUser: CreateCrestalUserInput!) {
		createCrestalUser(createCrestalUserInput: $createCrestalUser) {
			_id
		}
	}
`;
