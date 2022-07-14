import { Card, CardHeader, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import '../App.css';

function VolunteerContent() {
    return (
        <div style={{ marginTop: 30, marginBottom: 60 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12} >
                        <Card sx={{ p: 2, height: "90%" }} >
                            <CardHeader
                                title="Event Manager"
                            />
                            <Typography variant='body1' sx={{ ml: 2, fontFamily: 'Open Sans, sans-serif' }}>Perform tasks such as finding and booking venues, liaising with clients and suppliers, handling logistics, managing budgets and invoicing, organizing accreditation, managing risk and presenting post-event reports. They also require having knowledge of seven core elements, such as event infrastructure, audience, attendees, organizers, venue, and media. The following are: </Typography>
                            <ul>
                                <Typography variant='body1'><li>Speaker Coordination</li> </Typography>
                                <Typography variant='body1'><li>In-person / virtual platform coordination </li></Typography>
                                <Typography variant='body1'><li>Coordination with the Marketing Team </li></Typography>
                                <Typography variant='body1'><li>Day of the event; Speaker / Speaker Hand-off (MC) </li></Typography>
                                <Typography variant='body1'><li>Post Event Analysis </li></Typography>
                            </ul>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card sx={{ p: 2, height: "90%" }}>
                            <CardHeader
                                title="Marketing Manager"
                            />
                            <Typography variant='body1' sx={{ ml: 2, fontFamily: 'Open Sans, sans-serif' }}>Responsible for developing, implementing and executing strategic marketing plans for an entire organization (or lines of business and brands within an organization) in order to attract potential customers/volunteers and retain existing ones. The following duties are: </Typography>
                            <ul>
                                <Typography variant='body1'><li>Campaigning Efforts aligned with the events </li></Typography>
                                <Typography variant='body1'><li>Social Media Campaigning  </li></Typography>
                                <Typography variant='body1'><li>Providing guidance for branding  </li></Typography>
                                <Typography variant='body1'><li>Review of all Campaign Contents (Email; Posts)</li></Typography>
                                <Typography variant='body1'><li>Expertise in social media  </li></Typography>
                            </ul>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card sx={{ p: 2, height: "90%" }}>
                            <CardHeader
                                title="Training/Education Manager"
                            />
                            <Typography variant='body1' sx={{ ml: 2, fontFamily: 'Open Sans, sans-serif' }} className="App">Responsible for identifying training requirements and organization’s plans for training new and existing employees. It requires evaluation of training initiatives and maintain volunteer’s training records. The following duties are: </Typography>
                            <ul>
                            <Typography variant='body1'>  <li>Resolve the queries of candidates </li></Typography>
                            <Typography variant='body1'> <li>Tailoring Training Programs as per the requirements </li></Typography>
                            <Typography variant='body1'><li>Communication between the Managers/Candidates/Trainers </li></Typography>
                            <Typography variant='body1'><li>Detecting gaps in the training content and materials to provide quality learning </li></Typography>
            </ul>
        </Card>
                    </Grid >
                    <Grid item md={6} xs={12}>
                        <Card sx={{ p: 2, height: "90%" }}>
                            <CardHeader
                                title="Operations Manager"
                            />
                            <Typography variant='body1' sx={{ ml: 2, fontFamily:'Open Sans, sans-serif' }}>It is mainly to implement the right processes and practices across the organization. It includes formulating strategy, improving performance, procuring material and resources, and securing compliance. The following duties are: </Typography>
                            <ul>
                            <Typography variant='body1'> <li>Supervising </li></Typography>
                            <Typography variant='body1'>  <li>Managing  </li></Typography>
                            <Typography variant='body1'>  <li>Verifying the checklist</li></Typography>
                            <Typography variant='body1'>  <li>Project Manager</li></Typography >
                            </ul >
                        </Card >
                    </Grid >
        <Grid item md={6} xs={12}>
            <Card sx={{ p: 2, height: "90%" }}>
                <CardHeader
                    title="Partnership Manager"
                />
                <Typography variant='body1' sx={{ ml: 2, fontFamily: 'Open Sans, sans-serif' }} className="App">Responsible for managing high-value corporate partnerships and developing long-term strategies to secure multi-year strategic partnerships. The main goal to manage relationships and research new brands you could join forces with. The following duties are:</Typography>
                <ul>
                <Typography variant='body1'><li>Explain the benefits to the community</li></Typography>
                <Typography variant='body1'><li>Engage with community </li></Typography>
                <Typography variant='body1'><li>Host and provide KPIs</li></Typography>
                </ul>
            </Card>
        </Grid>
                </Grid >
            </Container >
        </div >
    )
}

export default VolunteerContent