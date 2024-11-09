import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Button, Icon, MenuItem, Popover } from '@mui/material';

const VIEW_OPTIONS = [
    { value: 'dayGridMonth', label: 'Month', icon: 'ic:round-view-module' },
    { value: 'dayGridWeek', label: 'Week', icon: 'ic:round-view-week' },
    { value: 'dayGridDay', label: 'Day', icon: 'ic:round-view-day' },
];

const MyCalendar = () => {
    
    const calendarRef = useRef(null);
    const [openPopover, setOpenPopover] = useState(null);
    const [view, setView] = useState('dayGridMonth'); 

    useEffect(() => {
        handleChangeView(view); 
    }, [view]);

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };
    
    const handleClosePopover = () => {
        setOpenPopover(null);
    };

    const events = [
        { title: 'Event 1', date: new Date(), color: 'green' },
        { title: 'Event 2', date: '2024-06-02', color: 'red' },
    ];

    const handleChangeView = (newView) => {
        const calendarEl = calendarRef.current;
        if (calendarEl) {
            const calendarApi = calendarEl.getApi();
            calendarApi.changeView(newView);
            setView(newView); 
        }
    };

    const selectedItem = VIEW_OPTIONS.find(option => option.value === view);

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Button
                color="inherit"
                onClick={handleOpenPopover}
                startIcon={<Icon icon={selectedItem.icon} />}
                endIcon={<Icon icon="eva:chevron-down-fill" />}
                sx={{
                    py: 0.5,
                    pl: 1.5,
                    bgcolor: 'action.selected',
                    '& .MuiButton-endIcon': { ml: 0.5 },
                }}
            >
                {selectedItem.label}
            </Button>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={view}
                events={events}
                timeZone='local'
                selectable={true}
                dateClick={(info) => alert('Date: ' + info.dateStr)}
            />
            <Popover
                open={Boolean(openPopover)}
                onClose={handleClosePopover}
                anchorEl={openPopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ width: 160 }}
            >
                {VIEW_OPTIONS.map((viewOption) => (
                    <MenuItem
                        key={viewOption.value}
                        onClick={() => {
                            handleClosePopover();
                            handleChangeView(viewOption.value);
                        }}
                        sx={{
                            ...(viewOption.value === view && {
                                bgcolor: 'action.selected',
                            }),
                        }}
                    >
                        <Icon icon={viewOption.icon} />
                        {viewOption.label}
                    </MenuItem>
                ))}
            </Popover>
        </Box>
    );
};

export default MyCalendar;
