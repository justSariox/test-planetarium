export const formatIpAddress = (ipAddress: any) => {
    const { octet1, octet2, octet3, octet4 } = ipAddress;
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
