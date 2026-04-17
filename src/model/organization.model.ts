export interface OrganizationModel {
	id: string;
	name: string;
	serverUrl: string;
	dbUrl: string;
	dbUsername: string;
	dbPassword: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}
