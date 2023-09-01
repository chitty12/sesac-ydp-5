const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
router.get('/', controller.index);

////////////////////////선수 관련 api/////////////////
router.get('/players', controller.getPlayers);

// get /players/:player_id 특정선수 조회
router.get('/players/:player_id', controller.getPlayer);

// post /players - 선수 추가
router.post('/players', controller.postPlayer);

// 특정 선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

// 특정 선수 삭제
router.delete('/players/:player_id', controller.deletePlayer);

////////////////////////팀 관련 api/////////////////
router.get('/teams', controller.getTeams);
router.get('/teams/:team_id', controller.getTeam);

// 특정 팀의 모든 선수 조회
router.get('/teams/:team_id/players', controller.getTeamPlayers);

module.exports = router;
