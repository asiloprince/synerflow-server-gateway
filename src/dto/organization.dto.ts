export interface CreateOrganizationDTO {
	name: string;
	serverUrl: string;
	dbUrl: string;
	dbUsername: string;
	dbPassword: string;
}

export interface OrganizationDTO {
	id: string;
	name: string;
	serverUrl: string;
	dbUrl: string;
	dbUsername: string;
	isConfigured: boolean;
}
